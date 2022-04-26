import style from "./ChatBoardItem.module.scss";
import MessagesChatBoard from "./MessagesChatBoard/MessagesChatBoard";
import React from "react";
import FormSendMessage from "./FormSendMessage/FormSendMessage";

function ChatBoardItem({
  usersChat: usersChat,
  setUsersChat: setUsersChat,
  activePage: activePage,
  setActivePage: setActivePage,
}) {
  const returnChatList = () => {
    setActivePage(true);
  };
  return (
    <div className={style.board__wrapper}>
      <div className={style.board__header}>
        <img src={usersChat.image} alt="user_icon" />
        <p>{usersChat.name}</p>
      </div>
      <button onClick={returnChatList} className={style.board__btnReturn}>
        return
      </button>
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
