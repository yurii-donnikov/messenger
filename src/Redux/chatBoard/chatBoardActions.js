import { CHAT_BOARD } from "./chatBoardTypes";

export const takeChatInfo = (payload) => ({
  type: CHAT_BOARD,
  payload,
});
