import React from 'react';
import {
  Alert,
  Dialog,
  DialogContent,
  Slide,
  Button,
  DialogActions,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function AlertDialog({
  children,
  open,
  setOpen,
  severity = 'warning',
}) {
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
          {typeof children === 'string' ? (
            <Typography variant="body2">{children}</Typography>
          ) : (
            children
          )}
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="text">
          {t('COMPONENT.BUT_CLOSE')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
