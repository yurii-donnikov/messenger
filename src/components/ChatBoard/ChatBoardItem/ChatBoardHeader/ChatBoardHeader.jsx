import style from "../ChatBoardItem.module.scss";

function ChatBoardHeader({
  usersChat: usersChat,
  returnChatList: returnChatList,
}) {
  return (
    <>
      <div className={style.board__header}>
        <img src={usersChat.image} alt="user_icon" />
        <p>{usersChat.name}</p>
      </div>
      <button onClick={returnChatList} className={style.board__btnReturn}>
        return
      </button>
    </>
  );
}
export default ChatBoardHeader;
