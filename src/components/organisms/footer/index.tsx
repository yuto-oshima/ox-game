import { createStyles, makeStyles, Theme, Link } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import SVG from './github-icon.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
      fontFamily: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
      textAlign: 'center'
    },
    wrapper: {
      backgroundColor: red[900],
      padding: theme.spacing(2)
    },
    credit: {
      fontWeight: 'bold'
    },
  }),
);

export const Footer = () => {
  const classes = useStyles();
  return(
    <footer className={classes.root}>
      <div className={classes.wrapper}>
        <p className={classes.credit}>Made By Yuto Oshima.</p>
        <Link href="https://github.com/yuto-oshima/ox-game" target="_blank">
          <img src={SVG} width="30" height="30"/>
        </Link>
      </div>
    </footer>
  );
};