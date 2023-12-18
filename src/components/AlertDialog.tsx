/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Alert,
  Dialog,
  DialogContent,
  Slide,
  Button,
  DialogActions,
  Typography,
  AlertColor
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type AlertDialogProps = {
  children: JSX.Element | JSX.Element[] | string;
  open: boolean;
  setOpen: (value: boolean) => void;
  severity: AlertColor;
};

export default function AlertDialog({
  children,
  open,
  setOpen,
  severity = "warning"
}: AlertDialogProps) {
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Alert severity={severity}>
          {typeof children === "string" ? (
            <Typography variant="body2">{children}</Typography>
          ) : (
            children
          )}
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="text">
          {t("COMPONENT.BUT_CLOSE")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
