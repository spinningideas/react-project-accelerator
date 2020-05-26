const AuthService = () => {
  const userHasSignedIn = () => {
    let signedInVal = window.localStorage.getItem('usersignedin');
    if (signedInVal) {
      return signedInVal === 'true';
    }
    return false;
  };

  const setUserHasSignedIn = (signedInVal) => {
    window.localStorage.setItem('usersignedin', Boolean(signedInVal));
  };

  const signIn = () => {
    setUserHasSignedIn(true);
  };

  const signOut = () => {
    setUserHasSignedIn(false);
  };

  return {
    userHasSignedIn,
    setUserHasSignedIn,
    signIn,
    signOut
  };
};

export default AuthService;
