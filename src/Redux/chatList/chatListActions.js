import { CHAT_LIST } from "./chatListTypes";

export const saveUsersChat = (payload) => ({
  type: CHAT_LIST,
  payload,
});
