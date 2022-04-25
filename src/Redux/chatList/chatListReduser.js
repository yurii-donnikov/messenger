import { CHAT_LIST } from "./chatListTypes";

const defaultState = {
  chatRender: null,
};

export const chatListReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CHAT_LIST:
      return {
        ...state,
        chatRender: action.payload,
      };

    default:
      return state;
  }
};
