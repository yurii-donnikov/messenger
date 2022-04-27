import style from "./ChatBoardItem.module.scss";
import MessagesChatBoard from "./MessagesChatBoard/MessagesChatBoard";
import React from "react";
import FormSendMessage from "./FormSendMessage/FormSendMessage";
import ChatBoardHeader from "./ChatBoardHeader/ChatBoardHeader";

function ChatBoardItem({
  usersChat: usersChat,
  setUsersChat: setUsersChat,
  setActivePage: setActivePage,
}) {
  const returnChatList = () => {
    setActivePage(true);
  };
  return (
    <div className={style.board__wrapper}>
      <ChatBoardHeader usersChat={usersChat} returnChatList={returnChatList} />
      <div className={style.chat}>
        {usersChat.chat.map((message) => {
          return <MessagesChatBoard key={message.id} message={message} />;
        })}
      </div>
      <FormSendMessage usersChat={usersChat} setUsersChat={setUsersChat} />
    </div>
  );
}

export default ChatBoardItem;
