import React from 'react';
import { TextField, Button, Grid, Link } from '@material-ui/core';

export const AcessarComponent = () => {
  return (
    <>
      <form className="" noValidate>
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
          className=""
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
