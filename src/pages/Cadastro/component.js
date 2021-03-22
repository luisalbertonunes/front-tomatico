import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import { useStyles } from './style';
import { Image } from '../../shared';
import logo from '../../images/logo-tomatico.png';

export const CadastroComponent = () => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box className={classes.box}>
          <Image src={logo} width="250px" height="auto" />
        </Box>
      </Grid>
    </Grid>
  );
};
