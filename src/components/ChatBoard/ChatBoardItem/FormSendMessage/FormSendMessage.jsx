import React, { useEffect } from "react";
import { useFormik } from "formik";
import style from "./FormSendMessage.module.scss";
import StatisDataIn from "../../../../StatisDataIn";
import { cloneDeep } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { chatRender } from "../../../../Redux/chatList/chatListSelectors";
import { fetchNewMessage } from "../../../../Redux/Thunk/thunkFetch";
import { featchInfo } from "../../../../Redux/Thunk/thunkSelectors";
import { featchError } from "../../../../Redux/Thunk/thunkSelectors";

function FormSendMessage({ usersChat: usersChat, setUsersChat: setUsersChat }) {
  const renderChat = useSelector(chatRender);
  const fetchInform = useSelector(featchInfo);
  const fetchErrors = useSelector(featchError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewMessage());
  }, []);

  const processIncomingMessage = (item) => {
    const incomingMessage = {
      sender: "companion",
      message: fetchInform.value,
      date: new Date(),
      id: Math.random(),
    };
    let storage = JSON.parse(localStorage.getItem("staticData"));
    storage.forEach((chatItem) => {
      if (chatItem.id === item.id) {
        chatItem.chat.push(incomingMessage);
      }
    });
    localStorage.setItem("staticData", JSON.stringify(storage));
    item.chat.push(incomingMessage);
    let copyItem = cloneDeep(item);
    setUsersChat(copyItem);
    renderChat();
  };

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      if (/[a-zA-Z0-9А-Яа-я_\S]/.test(values.message)) {
        let newMessage = {
          sender: "user",
          message: values.message,
          date: new Date(),
          id: Math.random(),
        };
        StatisDataIn.forEach((item) => {
          if (item.id === usersChat.id) {
            let storage = JSON.parse(localStorage.getItem("staticData"));
            storage.forEach((chatItem) => {
              if (chatItem.id === usersChat.id) {
                chatItem.chat.push(newMessage);
              }
            });
            localStorage.setItem("staticData", JSON.stringify(storage));
            item.chat.push(newMessage);
            let copyItem = cloneDeep(item);
            setUsersChat(copyItem);
            renderChat();
            const incomingMessage = () => {
              processIncomingMessage(item);
            };
            if (!fetchErrors) {
              setTimeout(incomingMessage, 2000);
              dispatch(fetchNewMessage());
            }
          }
        });
      }
      formik.resetForm();
    },
  });

  return !fetchErrors ? (
    <div className={style.chat__input}>
      <form className={style.input__wrapper} onSubmit={formik.handleSubmit}>
        <textarea
          className={style.input__newMessage}
          id="message"
          name="message"
          required
          type="text"
          placeholder="Write your message"
          onChange={formik.handleChange}
          value={formik.values.message}
        ></textarea>
        <button className={style.input__btn} type="submit">
          send
        </button>
      </form>
    </div>
  ) : (
    <p className={style.txt__error}>request error..</p>
  );
}

export default FormSendMessage;
