import { AppBar, Typography, Toolbar, Link, SvgIcon, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export type HeaderProps = {};

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      backgroundColor: '#212121',
      fontFamily: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const Header = (props: HeaderProps) => {
  const classes = useStyles();
  return(
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link href="/" color="inherit">OX-Game</Link>
        </Typography>
        <Typography variant="h6">
          <Button variant="outlined" color="inherit">
            <Link href="/cpu-battle" color="inherit" underline="none">CPU対戦</Link>
          </Button>
        </Typography>
        <Button color="inherit">
          <SvgIcon>
            <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
          </SvgIcon>
        </Button>
      </Toolbar>
    </AppBar>
  );
};