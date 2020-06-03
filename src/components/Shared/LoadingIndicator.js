import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: theme.spacing(6),
    color: '#1976d2'
  }
}));

function LoadingIndicator(props) {
  const classes = useStyles();
  if (props.display === undefined || props.display === false) {
    return <></>;
  }
  return <CircularProgress className={classes.progress} thickness={5} size={100} />;
}

export default LoadingIndicator;
