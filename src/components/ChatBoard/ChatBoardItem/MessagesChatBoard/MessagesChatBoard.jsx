import React from "react";
import style from "./MessagesChatBoard.module.scss";

function MessagesChatBoard({ message: message }) {
  return (
    <div className={`${style[message.sender]} ${style.message__wrapper}`}>
      <p>{message.message}</p>
      <span>{new Date(Date.parse(message.date)).toLocaleString()}</span>
    </div>
  );
}

export default MessagesChatBoard;
