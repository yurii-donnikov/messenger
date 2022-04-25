import React from "react";
import LogoutAuth from "../../googleAuth/LogoutAuth";
import style from "./UserInfo.module.scss";

function UserInfo({ info: userInfo }) {
  return (
    <div className={style.userInfo}>
      <img className={style.userInfo__photo} src={userInfo.imageUrl} alt="" />
      <p className={style.userInfo__name}>{userInfo.name}</p>
      <LogoutAuth />
    </div>
  );
}
export default UserInfo;
