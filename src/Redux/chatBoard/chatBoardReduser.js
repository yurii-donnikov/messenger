import { CHAT_BOARD } from "./chatBoardTypes";

const defaultState = {
  chatInfo: null,
};

export const chatBoardReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CHAT_BOARD:
      return {
        ...state,
        chatInfo: action.payload,
      };

    default:
      return state;
  }
};
