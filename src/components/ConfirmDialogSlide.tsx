import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { useTranslation } from "react-i18next";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ConfirmDialogSlideProps = {
  open: boolean;
  contentText: string;
  setOpen: (open: boolean) => void;
  callback: () => void;
};
export default function ConfirmDialogSlide({
  open,
  setOpen,
  contentText,
  callback,
}: ConfirmDialogSlideProps) {
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseOk = () => {
    setOpen(false);
    callback();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Typography variant="h6">{contentText}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t("CHAT.BUT_CLOSE")}
          </Button>
          <Button onClick={handleCloseOk} color="warning">
            {t("CHAT.BUT_CONFIRM")}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
