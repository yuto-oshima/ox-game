import { createStyles, makeStyles } from "@material-ui/core";
import { ReactElement } from "react";

export type PageTemplate = {
  header: ReactElement;
  footer: ReactElement;
  children?: ReactElement;
};

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '3.75rem',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
    header: {
      position: 'fixed',
      top: '0',
      width: '100%',
      zindex: '999'
    },
    content: {
      width: '100%',
      boxSizing: 'border-box',
      margin: '2rem auto',
      maxWidth: '1200px',
    },
    footer: {
      marginTop: 'auto',
    }
  }),
);

export const PageTemplate = (props: PageTemplate) => {
  const classes = useStyles();
  return(
    <div className={classes.wrapper}>
      <header className={classes.header}>{props.header}</header>
      <section className={classes.content}>{props.children}</section>
      <footer className={classes.footer}>{props.footer}</footer>
    </div>
  );
};