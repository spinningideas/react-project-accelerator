import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function AuthDialog(props) {
  const handleCancelClose = () => {
    props.handleSignInCancel(false);
  };

  const handleSignInClose = () => {
    props.handleSignIn();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          {props.locData.signindescription}
        </DialogTitle>
        {props.content && (
          <DialogContent>
            <DialogContentText id="dialog-description">
              {props.content}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button variant="secondary" onClick={() => handleCancelClose(false)}>
            {props.locData.cancel}
          </Button>
          <Button
            onClick={() => handleSignInClose(true)}
            variant="primary"
            autoFocus
          >
            {props.locData.signin}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AuthDialog;
