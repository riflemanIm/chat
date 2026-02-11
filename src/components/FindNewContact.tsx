import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  IconButton,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ChatContext } from "../context/ChatContext";
import { RestContext } from "../context/RestContext";
import { SocketContext } from "../context/SocketContext";
import { UserSearchResult } from "../types";
import { formatTime } from "../utils/common";

const FindNewContact: React.FC = () => {
  const { t } = useTranslation();
  const { state, dispatch } = React.useContext(ChatContext);
  const { socket } = React.useContext(SocketContext);
  const { getUsersByName } = React.useContext(RestContext);

  const isOperatorRole =
    state.user?.role != null && [3, 4].includes(state.user.role);
  const [open, setOpen] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState<UserSearchResult[]>([]);
  const [error, setError] = React.useState("");
  const [pendingUserId, setPendingUserId] = React.useState<number | null>(null);
  const [pendingRequest, setPendingRequest] = React.useState(false);
  const pending = pendingRequest || pendingUserId != null;
  const labels = React.useMemo(
    () => ({
      addContact: t("CHAT.ADD_CONTACT") || "Add contact",
      search: t("CHAT.SEARCH") || "Search",
      userNotFound: t("CHAT.ERROR.USER_NOT_FOUND") || "User not found",
      socketNotConnected:
        t("CHAT.ERROR.SOCKET_NOT_CONNECTED") || "Socket not connected",
      addingContact: t("CHAT.ADD_CONTACT_PENDING") || "Adding contact...",
      close: t("CHAT.BUT_CLOSE") || "Close",
    }),
    [t],
  );

  const resetState = React.useCallback(() => {
    setFullName("");
    setLoading(false);
    setResults([]);
    setError("");
    setPendingUserId(null);
    setPendingRequest(false);
  }, []);

  const handleOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
    resetState();
  }, []);

  const runSearch = React.useCallback(async () => {
    const query = fullName.trim();
    if (!query) return;
    setError("");
    setLoading(true);
    const data = await getUsersByName(query);
    setResults(data);
    setLoading(false);
  }, [fullName, getUsersByName]);

  const handleSubmit = React.useCallback(
    (event?: React.FormEvent) => {
      if (event) event.preventDefault();
      void runSearch();
    },
    [runSearch],
  );

  const handlePick = React.useCallback(
    (item: UserSearchResult) => {
      if (item.userId == null) {
        setError(labels.userNotFound);
        return;
      }
      const contact = state.contactGather[item.userId];
      if (contact) {
        dispatch({
          type: "SET_ACTIVE_ROOM",
          payload: { contactId: item.userId },
        });
        setOpen(false);
        resetState();
        return;
      }
      if (!socket) {
        setError(labels.socketNotConnected);
        return;
      }
      setError("");
      socket.emit("createPrivateChat", {
        emrGroupId: item.emrGroupId,
      });
      setPendingRequest(true);
      if (item.userId != null) {
        setPendingUserId(item.userId);
      }
    },
    [
      dispatch,
      labels.socketNotConnected,
      labels.userNotFound,
      socket,
      state.contactGather,
    ],
  );

  React.useEffect(() => {
    if (pendingUserId == null) return;
    const contact = state.contactGather[pendingUserId];
    if (contact) {
      dispatch({
        type: "SET_ACTIVE_ROOM",
        payload: { contactId: pendingUserId },
      });
      setPendingUserId(null);
      setOpen(false);
      resetState();
    }
  }, [dispatch, pendingUserId, resetState, state.contactGather]);

  React.useEffect(() => {
    if (!socket) return;
    const handleCreatePrivateChat = (res: {
      code: number;
      msg: string;
      data?: { patientUserId?: number };
    }) => {
      if (res.code) {
        resetState();
        setError(res.msg || labels.userNotFound);
        return;
      }
      if (res.data?.patientUserId != null) {
        setPendingUserId(res.data.patientUserId);
      }
      setPendingRequest(false);
    };
    socket.on("createPrivateChat", handleCreatePrivateChat);
    return () => {
      socket.off("createPrivateChat", handleCreatePrivateChat);
    };
  }, [labels.userNotFound, resetState, socket]);

  if (!isOperatorRole) return null;

  return (
    <>
      <IconButton
        aria-label="find contact"
        onClick={handleOpen}
        color="primary"
      >
        <PersonAddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{labels.addContact}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            alignItems="center"
            gap={1}
            mb={1}
          >
            <TextField
              fullWidth
              label={labels.search}
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              autoFocus
              sx={{ mt: 1 }}
            />
            <IconButton
              color="primary"
              aria-label="search"
              onClick={() => void runSearch()}
              disabled={loading || pending || !fullName.trim()}
            >
              {loading ? <CircularProgress size={20} /> : <SearchIcon />}
            </IconButton>
          </Box>
          {error && (
            <Alert severity="info" sx={{ my: 3 }}>
              <Typography variant="h6">{error}</Typography>
            </Alert>
          )}
          {pending && (
            <Box mb={1}>
              <LinearProgress />
            </Box>
          )}
          <List dense>
            {results.map((item) => {
              const full =
                [item.lastName, item.firstName, item.middleName]
                  .filter(Boolean)
                  .join(" ") || String(item.userId ?? "");
              const secondary = item.birthDate
                ? `${formatTime(item.birthDate, "DD.MM.YYYY")}`
                : undefined;
              return (
                <ListItemButton
                  key={`${item.emrGroupId}-${item.userId ?? "none"}`}
                  onClick={() => handlePick(item)}
                  disabled={pending}
                  color="primary"
                >
                  <ListItemText
                    primary={full}
                    secondary={secondary}
                    color="primary"
                  />
                </ListItemButton>
              );
            })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{labels.close}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FindNewContact;
