import React from 'react';
import { TextField, Button, Grid, Link } from '@material-ui/core';
import { useStyles } from './style';

export const AcessarComponent = (props) => {
  console.log(props, 'teste');
  const classes = useStyles();
  return (
    <>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Entrar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Esqueceu a senha?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              Não tem uma conta? Inscreva-se!
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
