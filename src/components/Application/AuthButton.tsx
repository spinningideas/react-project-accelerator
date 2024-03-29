import React from "react";
import Button from "@mui/material/Button";

const AuthButton = ({
  userSignedIn,
  locData,
  handleSignOutClick,
  setSignInDialogOpen,
}: {
  userSignedIn: boolean;
  locData: Record<string, string>;
  handleSignOutClick: () => void;
  setSignInDialogOpen: (open: boolean) => void;
}) => {
  if (userSignedIn) {
    return (
      <Button color="secondary" onClick={() => handleSignOutClick()}>
        {locData.signout}
      </Button>
    );
  } else {
    return (
      <Button color="primary" onClick={() => setSignInDialogOpen(true)}>
        {locData.signin}
      </Button>
    );
  }
};

export default React.memo(AuthButton);
