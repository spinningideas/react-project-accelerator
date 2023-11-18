import React, { useRef, useEffect } from "react";
import { getWindowHeight, getWindowWidth } from "hooks/useWindow";
import SlideTransition from "components/Shared/SlideTransition";
// Material UI
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Breakpoint } from "@mui/material";
/* 
Example Usage:

	<button onClick={() => openModal()}>Open modal</button>
	<Modal open={isModalOpen} onClose={() => closeModal()}>
		<h1>Modal title</h1>
		<p>hello</p>
		<p><button onClick={() => closeModal()}>Close</button></p>
	</Modal>
*/

const ModalDialog = ({
  title,
  open,
  onClose,
  fullScreen = false,
  maxWidth = "sm",
  height,
  contentPadding = 0,
  children,
}: {
  title?: string;
  open: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  width?: number;
  maxWidth?: Breakpoint;
  height?: number;
  contentPadding?: number;
  children: any;
}) => {
  const modalDialogTopRef = useRef<any>(null);

  const scrollContentIntoView = () => {
    document.documentElement.scrollTop = 0;
    setTimeout(() => {
      const modalDialogTop = document.getElementById(
        "modal-dialog-content-top"
      );
      if (modalDialogTop) {
        modalDialogTop.scrollTo({ top: 0, behavior: "smooth" });
        modalDialogTop.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };

  const getModalHeight = (): string => {
    if (fullScreen) {
      return windowHeight + "px";
    }
    return height ? height.toString() : "auto";
  };

  const windowHeight = getWindowHeight();
  const windowWidth = getWindowWidth();

  const closeDialog = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      scrollContentIntoView();
    }
  }, [open]);

  if (open === false) return null;

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth={maxWidth}
      scroll="paper"
      open={open}
      onClose={closeDialog}
      TransitionComponent={SlideTransition}
      hideBackdrop={true}
      PaperProps={{
        style: {
          zIndex: "9999",
          position: "absolute",
          top: fullScreen ? "0" : "5%",
          left: fullScreen ? "0" : "33%",
          height: getModalHeight(),
          maxWidth: windowWidth + "px !important",
          margin: 0,
          color: "text.default",
          backgroundColor: "background.default",
          overflow: "hidden",
        },
      }}
      sx={{
        "& .MuiModal-backdrop": {
          verticalAlign: "top",
          backgroundColor: "transparent",
        },
        "& .MuiDialog-paper": {
          boxShadow: "2",
          border: 1,
          borderColor: "divider",
        },
      }}
    >
      <AppBar
        id="modal-dialog-content-top"
        ref={modalDialogTopRef}
        sx={{
          boxShadow: "none",
          borderBottom: 1,
          borderColor: "divider",
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
              padding: 0,
              paddingLeft: 1,
              paddingRight: 1,
              flexGrow: 1,
            }}
          >
            <Box sx={{ flexGrow: 1, padding: 1, fontSize: 20 }}>{title}</Box>
            <IconButton
              onClick={(e) => {
                closeDialog(e);
              }}
              sx={{
                padding: 1,
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <DialogContent
        sx={{
          padding: contentPadding,
          paddingBottom: 4,
          height: getModalHeight(),
          maxWidth: windowWidth + "px !important",
          overflowX: "auto",
          overflowY: "auto",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(ModalDialog);
