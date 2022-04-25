import style from "./ChatListContant.module.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { CHAT_BOARD } from "../../../Redux/chatBoard/chatBoardTypes";

function ChatListContant({ listItem: listItem, setActivePage: setActivePage }) {
  let dispatch = useDispatch();
  const collectUserInfo = () => {
    dispatch({ type: CHAT_BOARD, payload: listItem });
    setActivePage(false);
  };
  let date;
  if (typeof listItem.chat[listItem.chat.length - 1].date === "string") {
    date = new Date(
      Date.parse(listItem.chat[listItem.chat.length - 1].date)
    ).toLocaleDateString();
  }

  return (
    <div onClick={collectUserInfo} className={style.chats__wrapper}>
      <img className={style.chats__avatar} src={listItem.image} alt="" />
      <div className={style.chats__txt}>
        <p>{listItem.name}</p>
        <p className={style.chats__lastMessage}>
          {listItem.chat[listItem.chat.length - 1].message}
        </p>
      </div>
      <p className={style.chats__date}>{date}</p>
    </div>
  );
}

export default ChatListContant;
