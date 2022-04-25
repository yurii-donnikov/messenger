import style from "./ChatBoard.module.scss";
import { useSelector } from "react-redux";
import { chatInfo } from "../../Redux/chatBoard/chatBoardSelectors";
import React, { useEffect, useState } from "react";
import ChatBoardItem from "./ChatBoardItem/ChatBoardItem";

function ChatBoard({ activePage: activePage, setActivePage: setActivePage }) {
  const chatInform = useSelector(chatInfo);
  const [usersChat, setUsersChat] = useState(chatInform);
  useEffect(() => {
    setUsersChat(chatInform);
  }, [chatInform]);

  return (
    <div
      className={
        !activePage
          ? `${style.chatBoard} + ' ' + ${style.chatBoard_mobile}`
          : style.chatBoard
      }
    >
      {!usersChat ? (
        <p className={style.chatBoard__txtTitle}>open chat</p>
      ) : (
        <ChatBoardItem
          usersChat={usersChat}
          setUsersChat={setUsersChat}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}
    </div>
  );
}
export default ChatBoard;
