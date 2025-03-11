import { ChatData, Group, GroupMessage, PrivateMessage } from "../types";

export const createSocketHandlers = (
  dispatch: any,
  socket: any,
  state: any
) => ({
  handleChatData: (data: ChatData) => {
    dispatch({ type: "CLEAR_CHAT_DATA" });
    dispatch({ type: "SET_USER", payload: data.user });

    data.groupData.forEach((group) => {
      socket?.emit("joinGroupSocket", { groupId: group.groupId });
      dispatch({ type: "SET_GROUP_GATHER", payload: group });
    });

    data.contactData.forEach((contact) => {
      socket?.emit("joinPrivateSocket", { contactId: contact.userId });
      dispatch({ type: "SET_CONTACT_GATHER", payload: contact });
    });

    dispatch({ type: "SET_OPERATORS", payload: data.operatorData });
    data.userData.forEach((user) =>
      dispatch({ type: "SET_USER_GATHER", payload: user })
    );

    dispatch({ type: "UPDATE_ACTIVE_ROOM" });
    dispatch({ type: "SET_CONFERENCE", payload: data.conferenceData });
    dispatch({ type: "SET_VISIT_DATA", payload: data.visitData });
  },

  handleGroupMessage: (data: GroupMessage) => {
    dispatch({ type: "ADD_GROUP_MESSAGE", payload: data });

    const { activeRoom } = state;
    if (
      activeRoom &&
      (activeRoom as Group).groupId === data.groupId &&
      data.userId !== state.user.userId
    ) {
      socket?.emit("markAsRead", {
        groupId: data.groupId,
        _id: data._id,
      });
    }
  },

  handlePrivateMessage: (data: PrivateMessage) => {
    if (
      data.contactId === state.user.userId ||
      data.userId === state.user.userId
    ) {
      dispatch({ type: "ADD_PRIVATE_MESSAGE", payload: data });

      if (
        state.activeRoom &&
        !(state.activeRoom as Group).groupId &&
        state.activeRoom?.userId === data.userId
      ) {
        socket?.emit("markAsRead", {
          contactId: data.userId,
          _id: data._id,
        });
      }
    }
  },
});
