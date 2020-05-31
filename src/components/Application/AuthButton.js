
import React from 'react';
import Button from '@material-ui/core/Button';

const AuthButton = (props) => {	
	if (props.userSignedIn) {
		return <Button onClick={() => props.handleSignOutClick()}>{props.locData.signout}</Button>;
	} else {
		return <Button onClick={() => props.setSignInDialogOpen(true)}>{props.locData.signin}</Button>;
	}
};

export default AuthButton;