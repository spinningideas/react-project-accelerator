import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

function AuthDialog(props) {
  const handleCancelClose = () => {
    props.handleSignInCancel(false);
  };

  const handleSignInClose = () => {
    props.handleSignIn();
  };

  return (
    <div>
      <Dialog open={props.open} aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogTitle id="dialog-title">{props.locData.signindescription}</DialogTitle>
        {props.content && (
          <DialogContent>
            <DialogContentText id="dialog-description">{props.content}</DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => handleCancelClose(false)}>{props.locData.cancel}</Button>
          <Button onClick={() => handleSignInClose(true)} color="secondary" autoFocus>
            {props.locData.signin}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AuthDialog;
