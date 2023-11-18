import Box from "@mui/material/Box";
import React from "react";

type ErrorHandlerProps = { children: any };

type ErrorHandlerState = {
  hasError: boolean;
};

/*
Component which encapsulates presenting error message 
if any application level errors occur 
*/
class ErrorHandler extends React.Component<
  ErrorHandlerProps,
  ErrorHandlerState
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ margin: 2 }}>
          <h3>Something went wrong. Please reload the page to continue</h3>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorHandler;
