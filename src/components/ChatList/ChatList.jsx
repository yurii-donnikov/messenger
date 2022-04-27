import React, { useState, useRef, useEffect } from "react";
import ChatListContant from "./ChatListContant/ChatListContant";
import style from "./ChatList.module.scss";
import StatisDataIn from "../../StatisDataIn";
import { cloneDeep } from "lodash";
import { useDispatch } from "react-redux";
import { saveUsersChat } from "../../Redux/chatList/chatListActions";
import ChatListHeader from "./ChatListHeader/ChatListHeader";

function ChatList({ activePage: activePage, setActivePage: setActivePage }) {
  let dispatch = useDispatch();
  let staticData;
  if (localStorage.getItem("staticData") !== null) {
    staticData = JSON.parse(localStorage.getItem("staticData"));
  } else {
    localStorage.setItem("staticData", JSON.stringify(StatisDataIn));
    staticData = JSON.parse(localStorage.getItem("staticData"));
  }
  const [everyUsers, setEveryUsers] = useState(staticData);
  const [desiredUsers, setDesiredUser] = useState(everyUsers);
  const inputRef = useRef(null);

  const sortNewMessage = (arr) => {
    arr.sort(function (a, b) {
      if (a.chat[a.chat.length - 1].date < b.chat[b.chat.length - 1].date) {
        return 1;
      }
      if (a.chat[a.chat.length - 1].date > b.chat[b.chat.length - 1].date) {
        return -1;
      }
      return 0;
    });
  };
  sortNewMessage(desiredUsers);

  const findUser = () => {
    let filteredUser = everyUsers.filter((user) =>
      user.name.toLowerCase().includes(inputRef.current.value)
    );
    setDesiredUser(filteredUser);
  };

  function renderChatList() {
    let dataStorage = JSON.parse(localStorage.getItem("staticData"));
    sortNewMessage(dataStorage);
    let copyDataStorage = cloneDeep(dataStorage);
    setEveryUsers(dataStorage);
    setDesiredUser(copyDataStorage);
  }

  useEffect(() => {
    dispatch(saveUsersChat(renderChatList));
  }, []);

  const visiblePage = !activePage
    ? `${style.chatList__wrapper} + ' ' + ${style.chatList__wrapper_mobile}`
    : style.chatList__wrapper;

  return (
    <div className={visiblePage}>
      <ChatListHeader findUser={findUser} inputRef={inputRef} />
      <div className={style.chatList__list}>
        {desiredUsers.map((listItem) => {
          return (
            <ChatListContant
              key={listItem.id}
              listItem={listItem}
              setActivePage={setActivePage}
            />
          );
        })}
      </div>
    </div>
  );
}
export default ChatList;
