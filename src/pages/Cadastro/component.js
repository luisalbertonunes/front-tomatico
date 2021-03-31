import React from 'react';
import { Grid, Paper, Box, CssBaseline } from '@material-ui/core';
import { useStyles } from './style';
import { Image, Anchor } from '../../shared';
import logo from '../../images/logo-tomatico.png';
import { Acessar } from './Acessar';

export const CadastroComponent = (props) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.rootCadastro}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box className={classes.boxAnchors}>
          <Anchor
            anchors={[
              {
                href: 'https://app.tomatico.com/minhaConta.html',
                text: 'Home',
                target: '_blank',
              },
              {
                href: 'https://www.tomatico.com.br/sobre-nos/',
                text: 'Sobre Nós',
                target: '_blank',
              },
              {
                href: 'https://www.tomatico.com.br/faq/',
                text: 'FAQ',
                target: '_blank',
              },
            ]}
          />
        </Box>
        <Box className={classes.box}>
          <Image src={logo} width="250px" height="auto" />
          <Acessar />
        </Box>
      </Grid>
    </Grid>
  );
};
