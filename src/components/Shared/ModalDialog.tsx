import React, { useRef, useEffect } from "react";
import { getWindowHeight, getWindowWidth } from "hooks/useWindow";
// Material UI
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
/* 
Component which displays UI in a Modal Dialog 
that has a title and button to close the Dialog at the top

Example Usage:

	<button onClick={() => openModal()}>Open modal</button>
	<ModalDialog open={isModalOpen} onClose={() => closeModal()}>
		<Box><h1>Modal title</h1></Box>
		<Box sx={{p: 2}}>hello</Box>
		<Box sx={{p: 2}}><button onClick={() => closeModal()}>Close</button></Box>
	</ModalDialog>
*/

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalDialog = ({
  title,
  open,
  onClose,
  fullScreen = false,
  width = 500,
  height,
  children,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  fullScreen: boolean;
  width?: number;
  height: number;
  children: JSX.Element;
}) => {
  const modalDialogTopRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobileViewport = useMediaQuery(theme.breakpoints.down("md"));

  const scrollModalToTop = () => {
    document.documentElement.scrollTop = 0;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);
  };

  const isFullWidth = () => {
    return fullScreen || isMobileViewport;
  };

  const getModalWidth = () => {
    if (isFullWidth()) {
      return windowWidth;
    }
    return width ? width : windowWidth / 2;
  };

  const getModalHeight = () => {
    if (fullScreen) {
      return windowHeight;
    }
    return height ? height : windowHeight / 2;
  };

  const windowHeight = getWindowHeight();
  const windowWidth = getWindowWidth();
  const contentHeight = getModalHeight() - 60;

  const close = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      scrollModalToTop();
    }
  }, [open]);

  if (open === false) return null;

  return (
    <Dialog
      fullScreen={fullScreen}
      scroll="paper"
      open={open}
      onClose={close}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          position: "absolute",
          margin: 0,
          zIndex: "9999",
          color: "text.default",
          backgroundColor: "background.default",
          width: getModalWidth(),
          height: getModalHeight(),
          top: isFullWidth() ? "0" : "5%",
          left: isFullWidth() ? "0" : "33%",
          maxWidth: windowWidth,
        },
      }}
      BackdropProps={{
        style: {
          margin: 0,
          verticalAlign: "top",
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <AppBar
        id="modal-dialog-content-top"
        ref={modalDialogTopRef}
        sx={{
          "& .MuiToolbar-root": {
            paddingLeft: 0,
            paddingRight: 0,
          },
          position: "relative",
          backgroundColor: "background.default",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 1,
              flexGrow: 1,
            }}
          >
            <Box sx={{ flexGrow: 1, padding: 1, fontSize: 20 }}>{title}</Box>
            <IconButton onClick={close} variant="rounded" aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: contentHeight,
          padding: 0,
          paddingBottom: 4,
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </Dialog>
  );
};

export default React.memo(ModalDialog);
