import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  rootAnchor: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));
