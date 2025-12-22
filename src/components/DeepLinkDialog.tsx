import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

type DeepLinkDialogProps = {
  open: boolean;
  url: string;
  onClose: () => void;
};

const DeepLinkDialog: React.FC<DeepLinkDialogProps> = ({
  open,
  url,
  onClose,
}: DeepLinkDialogProps) => {
  const { t } = useTranslation();

  const handleConfirm = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="chat-conference-deep-link-title"
    >
      <DialogContent>
        <Typography id="chat-conference-deep-link-title" variant="h6">
          Перейти по ссылке врача?
        </Typography>
        {url ? (
          <Typography variant="body2">
            <Link href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </Link>
          </Typography>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t("CHAT.BUT_CLOSE")}
        </Button>
        <Button onClick={handleConfirm} color="warning">
          {t("CHAT.BUT_CONFIRM")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeepLinkDialog;
