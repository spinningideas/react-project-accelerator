import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

function AuthDialog({
  open,
  handleSignIn,
  handleSignInCancel,
  locData,
  content,
}: {
  open: boolean;
  handleSignIn: () => void;
  handleSignInCancel: () => void;
  locData: Record<string, string>;
  content?: string;
}) {
  const handleCancelClose = () => {
    handleSignInCancel();
  };

  const handleSignInClose = () => {
    handleSignIn();
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{locData.signindescription}</DialogTitle>
        {content && (
          <DialogContent>
            <DialogContentText id="dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button variant="secondary" onClick={() => handleCancelClose()}>
            {locData.cancel}
          </Button>
          <Button
            onClick={() => handleSignInClose()}
            variant="primary"
            autoFocus
          >
            {locData.signin}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AuthDialog;
