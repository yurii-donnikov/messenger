import React, { useState } from "react";
import { useSelector } from "react-redux";
import { user } from "../../Redux/auth/authSelectors";
import UserInfo from "../../components/UserInfo/UserInfo";
import ChatList from "../../components/ChatList/ChatList";
import ChatBoard from "../../components/ChatBoard/ChatBoard";
import style from "./Messanger.module.scss";

function Messanger() {
  const [activePage, setActivePage] = useState(true);
  const userInfo = useSelector(user);
  return (
    <div className={style.messanger__wrapper}>
      <UserInfo info={userInfo} />
      <ChatList activePage={activePage} setActivePage={setActivePage} />
      <ChatBoard activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default Messanger;
