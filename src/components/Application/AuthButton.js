import React from "react";
import Button from "@mui/material/Button";

const AuthButton = (props) => {
  if (props.userSignedIn) {
    return (
      <Button variant="secondary" onClick={() => props.handleSignOutClick()}>
        {props.locData.signout}
      </Button>
    );
  } else {
    return (
      <Button variant="primary" onClick={() => props.setSignInDialogOpen(true)}>
        {props.locData.signin}
      </Button>
    );
  }
};

export default AuthButton;
