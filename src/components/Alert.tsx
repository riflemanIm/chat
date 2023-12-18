import React from "react";
import { ChatContext } from "../context/ChatContext";
import { Alert, Snackbar } from "@mui/material";

const ChatAlert: React.FC = () => {
  // const { t } = useTranslation();
  //const [havePermissions, setHavePermissions] = useState(false);
  const {
    state: { error, success },
    dispatch
  } = React.useContext(ChatContext);

  const handleClose = () => {
    dispatch({ type: "SET_ERROR", payload: undefined });
    dispatch({ type: "SET_SUCCES", payload: undefined });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={!!error || !!success}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={error ? "error" : "success"}>
        {error ? error : success}
      </Alert>
    </Snackbar>
  );
};

export default ChatAlert;
