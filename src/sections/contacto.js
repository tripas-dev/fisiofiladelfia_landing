/** @jsx jsx */
import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';


export default function Contacto() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a status in state to handle the response from our API.
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const handleMailChimpResponse = (errorMsg, successMsg) => {
    if (errorMsg) {
      // 4. If there was an error, update the message in state.
      setStatus({
        info: { error: true, msg: errorMsg },
      });

      return;
    }

    // 5. Clear the input value and show a success message.
    setStatus({
      submitted: true,
      submitting: false,
      info: { error: false, msg: successMsg },
    });
    inputEl.current.value = '';
  };

  const handleSendGridResponse = (status, msg) => {
    if (status === 200) {
      // 5. Clear the input value and show a success message.
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      inputEl.current.value = '';
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const subscribe = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    //for mailChimp integration
    const { error } = await res.json();
    handleMailChimpResponse(
      error,
      'Success! 🎉 You are now subscribed to the newsletter.'
    );
    // For sendGrid integration
    const text = await res.text();
    handleSendGridResponse(res.status, text);
  };
  return (
    <section sx={styles.workflow} id = 'contacto' >
      <Container>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBoxInner}>
          <Heading as="h2" sx={styles.title}>
              Contacto
            </Heading>
            <Text as="p" sx={styles.description}>
              Faça-nos saber suas dúvidas, deixe teu contacto que vamos responder prontamente!
            </Text>
            <form onSubmit={subscribe}>
              <Flex sx={styles.subscribeForm}>
                <label htmlFor="name" sx={{ variant: 'styles.srOnly' }}>
                  Nome Adicionado
                </label>
                <Input
                  ref={inputEl}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nome"
                />

                <div>
                  {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                  )}
                  {!status.info.error && status.info.msg && (
                    <div className="success">{status.info.msg}</div>
                  )}
                </div>
                
              </Flex>
              <Flex sx={styles.subscribeForm}>
                <label htmlFor="phone" sx={{ variant: 'styles.srOnly' }}>
                  Telemovel Adicionado
                </label>
                <Input
                  ref={inputEl}
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Telefone"
                />

                <div>
                  {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                  )}
                  {!status.info.error && status.info.msg && (
                    <div className="success">{status.info.msg}</div>
                  )}
                </div>
                
              </Flex>
              <Flex sx={styles.duvidas}>
                <label htmlFor="text" sx={{ variant: 'styles.srOnly' }}>
                  Duvidas Adicionado
                </label>
                <textarea
                  ref={inputEl}
                  id="duvidas"
                  name="duvidas"
                  placeholder="Duvidas"
                  rows={6}
                  cols={110}
                />
                <div>
                  {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                  )}
                  {!status.info.error && status.info.msg && (
                    <div className="success">{status.info.msg}</div>
                  )}
                </div>
              
              </Flex>
            
            <Button sx = {styles['.subscribe__btn']}
                  type="submit"
                  disabled={status.submitting}
                  className="subscribe__btn"
                  aria-label="Enviar"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? 'Enviar'
                      : 'Enviado'
                    : 'Enviando...'}
                </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  contentBox: {
    m: '-40px',
    textAlign: 'center',
    borderRadius: 10,
    py: ['60px', null, 8],
  },
  contentBoxInner: {
    width: ['100%', null, '1000px', '900px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
    pt: '100px',
    
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [2, 3],
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    color: 'white',
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  subscribeForm: {
    mt: [6, null, null, 7],
    backgroundColor: ['transparent', 'white'],
    borderRadius: [0, 50],
    overflow: 'hidden',
    p: [0, 1],
    flexDirection: ['column', 'row'],
    '[type="email"]': {
      border: 0,
      borderRadius: 50,
      fontFamily: 'body',
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'heading',
      py: 1,
      px: [4, null, 6],
      backgroundColor: ['white', 'transparent'],
      height: ['52px', null, '60px'],
      textAlign: ['center', 'left'],
      '&:focus': {
        boxShadow: '0 0 0 0px',
        border: '0 0 0 0'
      },
      '::placeholder': {
        color: 'black',
        opacity: 1,
      },
    },
  },
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
  duvidas: {
    mt: [6, null, null, 7],
    backgroundColor: ['transparent', 'white'],
    borderRadius: [0, 50],
    overflow: 'hidden',
    p: ['25px'],
    pl: 0,
    flexDirection: ['column', 'row'],
    textarea:{
      border: 'none',
      resize:'none',
      fontFamily: 'body',
      fontSize: ['14px', null, 2],
      color: 'heading',
      py: 1,
      px: [4, null, 6],
      backgroundColor: ['white', 'transparent'],
      textAlign: ['center', 'left'],
      '&:focus':{
        boxShadow: '0 0 0 0px',
        outline: 'none',
      },
    },
  },
  '.subscribe__btn': {
    flexShrink: 0,
    ml: [0, 2],
    backgroundColor: ['text', 'black'],
    mt: '15px',
    py: ['15px'],
    p: ['20px, 40px'],
  },
};
