import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  rootCadastro: {
    height: '100vh',
    border: '1px solid red',
  },
  image: {
    backgroundImage:
      'url(https://i.ibb.co/mc9Qt2d/pexels-andre-moura-6105554.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fafafa',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  box: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid green',
  },
}));
