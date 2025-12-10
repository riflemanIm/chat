export const SOCKET_EVENTS = {
  // Auth events
  UNAUTHORIZED: "unauthorized",
  CHAT_DATA: "chatData",

  // User status events
  USER_ONLINE: "userOnline",
  USER_OFFLINE: "userOffline",
  JOIN_PRIVATE_SOCKET: "joinPrivateSocket",

  // Message events
  TYPING: "typing",
  REVOKE_MESSAGE: "revokeMessage",
  GROUP_MESSAGE: "groupMessage",
  PRIVATE_MESSAGE: "privateMessage",
  MARK_AS_READ: "markAsRead",

  // Group events
  ADD_GROUP: "addGroup",
  DELETE_GROUP: "deleteGroup",
  JOIN_GROUP: "joinGroup",
  UPDATE_GROUP_INFO: "updateGroupInfo",
  JOIN_GROUP_SOCKET: "joinGroupSocket",

  // Conference events
  START_CONFERENCE: "startConference",
  PAUSE_CONFERENCE: "pauseConference",
  RESUME_CONFERENCE: "resumeConference",
  STOP_CONFERENCE: "stopConference",

  // Other events
  ADD_OPERATOR: "addOperator",
  SET_ACTIVE_ROOM: "setActiveRoom",
  VISIT_DATA: "visitData",
  ADD_CONTACT: "addContact",
  DELETE_CONTACT: "deleteContact",
  UPDATE_USER_INFO: "updateUserInfo",

  ADD_GROUP_MEMBER: "addGroupMember",
  DELETE_GROUP_MEMBER: "deleteGroupMember",
} as const;
