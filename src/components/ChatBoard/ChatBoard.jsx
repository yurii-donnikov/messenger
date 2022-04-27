import style from "./ChatBoard.module.scss";
import { useSelector } from "react-redux";
import { chatInfo } from "../../Redux/chatBoard/chatBoardSelectors";
import React, { useEffect, useState } from "react";
import ChatBoardItem from "./ChatBoardItem/ChatBoardItem";
import ChatBoardStart from "./ChatBoardStart/ChatBoardStart";

function ChatBoard({ activePage: activePage, setActivePage: setActivePage }) {
  const chatInform = useSelector(chatInfo);
  const [usersChat, setUsersChat] = useState(chatInform);
  useEffect(() => {
    setUsersChat(chatInform);
  }, [chatInform]);
  const visiblePage = !activePage
    ? `${style.chatBoard} + ' ' + ${style.chatBoard_mobile}`
    : style.chatBoard;

  return (
    <div className={visiblePage}>
      {!usersChat ? (
        <ChatBoardStart />
      ) : (
        <ChatBoardItem
          usersChat={usersChat}
          setUsersChat={setUsersChat}
          setActivePage={setActivePage}
        />
      )}
    </div>
  );
}
export default ChatBoard;
