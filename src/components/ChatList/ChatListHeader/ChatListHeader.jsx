import style from "../ChatList.module.scss";
import search from "../../../images/search.svg";

function ChatListHeader({ findUser: findUser, inputRef: inputRef }) {
  return (
    <>
      <div className={style.searchWrapper}>
        <label htmlFor="inputSearch">
          <input
            className={style.searchWrapper__input}
            onKeyUp={findUser}
            ref={inputRef}
            type="text"
            placeholder="Search chat"
            id="inputSearch"
          />
          <img className={style.searchWrapper__img} src={search} alt="" />
        </label>
      </div>
      <p className={style.chatList__title}>Chats</p>
    </>
  );
}
export default ChatListHeader;
